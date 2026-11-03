/** @jsxImportSource @emotion/react */
import { UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, ConfigProvider, Menu } from 'antd';
import { Link, useFullSidebarData, useLocale, useLocation, useSidebarData } from 'dumi';
import MobileMenu from 'rc-drawer';
// @ts-ignore
import 'rc-drawer/assets/index.css';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useSiteToken from '@ahooks.js/dumi-theme-antd/dist/hooks/useSiteToken';
import SiteContext from '@ahooks.js/dumi-theme-antd/dist/slots/SiteContext';

interface SidebarItem {
  title?: string;
  link?: string;
  order?: number;
  frontmatter?: Record<string, any>;
}
interface SidebarGroup {
  title?: string;
  order?: number;
  children?: SidebarItem[];
}

const useStyle = () => {
  const { token } = useSiteToken();
  const { antCls, fontFamily, colorSplit } = token;
  return {
    asideContainer: css`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, ${fontFamily}, sans-serif;

      &${antCls}-menu-inline {
        user-select: none;
        ${antCls}-menu-submenu-title h4,
        > ${antCls}-menu-item,
        ${antCls}-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > ${antCls}-menu-item-group > ${antCls}-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: ${colorSplit};
            content: '';
          }
        }

        > ${antCls}-menu-item,
        > ${antCls}-menu-submenu > ${antCls}-menu-submenu-title,
        > ${antCls}-menu-item-group > ${antCls}-menu-item-group-title,
        > ${antCls}-menu-item-group > ${antCls}-menu-item-group-list > ${antCls}-menu-item,
        &${antCls}-menu-inline > ${antCls}-menu-item-group > ${antCls}-menu-item-group-list > ${antCls}-menu-item {
          padding-left: 40px !important;

          ${antCls}-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        &${antCls}-menu-inline {
          ${antCls}-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            ${antCls}-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          ${antCls}-menu-item-group-list > ${antCls}-menu-item {
            padding-left: 80px !important;

            ${antCls}-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        ${antCls}-menu-item-group:first-of-type {
          ${antCls}-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `,
    mainMenu: css`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 64px;
        height: calc(100vh - 64px);
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `,
    mobileMenu: css`
      position: fixed;
      z-index: 2;
      bottom: 100px;
      right: 20px;
      cursor: pointer;
    `,
  };
};

const Sidebar: React.FC = () => {
  const [state, setState] = useState({ mobileMenuVisible: false });
  const { pathname, search } = useLocation();
  const locale = useLocale() as { id: string; suffix?: string; base?: string };
  const fullSidebar = (useFullSidebarData() || {}) as Record<string, SidebarGroup[]>;
  const currentSidebar = useSidebarData() as SidebarGroup[] | undefined;
  const styles = useStyle();
  const {
    token: { colorBgContainer },
  } = useSiteToken();
  const { theme, isMobile } = useContext(SiteContext);
  const isDark = theme?.includes('dark');

  const suffix = locale?.suffix || '';

  const stripSuffix = useCallback(
    (seg: string) => (suffix && seg.endsWith(suffix) ? seg.slice(0, -suffix.length) : seg),
    [suffix],
  );

  // 当前一级分类（如 field / form / layout），去掉语言后缀
  const firstSeg = pathname.split('/').filter(Boolean)[0] || '';
  const category = stripSuffix(firstSeg);

  // 关键：把 useFullSidebarData 里所有 `/<category>/**` 的分组聚合起来，
  // 因为 dumi 2 级导航会让每个组件各自成一个 key（/field/avatar-stamp-cn）。
  const mergedGroups = useMemo<SidebarGroup[]>(() => {
    if (!category) return [];
    const map = new Map<string, SidebarGroup>();
    Object.keys(fullSidebar).forEach((key) => {
      const seg = key.split('/').filter(Boolean)[0] || '';
      if (stripSuffix(seg) !== category) return;
      (fullSidebar[key] || []).forEach((group) => {
        const title = group?.title;
        // 没有分组头的（类别总览页）跳过，避免混进组件列表
        if (!title) return;
        if (!map.has(title)) {
          map.set(title, { title, order: group.order, children: [] });
        }
        (group.children || []).forEach((child) => {
          // 跳过总览页（一级链接），只保留组件（二级及以上）
          if ((child.link || '').split('/').filter(Boolean).length < 2) return;
          map.get(title)!.children!.push(child);
        });
      });
    });
    return Array.from(map.values());
  }, [fullSidebar, category, stripSuffix]);

  const source = mergedGroups.length > 0 ? mergedGroups : currentSidebar || [];

  const menuItems = useMemo(() => {
    const result: any[] = [];
    (source || []).forEach((group) => {
      if (!group) return;
      const childItems = (group.children || [])
        .filter((c) => c && c.link)
        .map((c) => ({
          label: <Link to={`${c.link}${search}`}>{c.title}</Link>,
          key: (c.link || '').replace(suffix, ''),
        }));
      if (group.title) {
        result.push({
          type: 'group',
          label: group.title,
          key: group.title,
          children: childItems,
        });
      } else {
        result.push(...childItems);
      }
    });
    return result;
  }, [source, search, suffix]);

  const selectedKey = pathname.replace(suffix, '');

  const handleShow = useCallback(() => {
    setState((prev) => ({ ...prev, mobileMenuVisible: true }));
  }, []);
  const handleClose = useCallback(() => {
    setState((prev) => ({ ...prev, mobileMenuVisible: false }));
  }, []);

  useEffect(() => {
    if (isMobile) handleClose();
  }, [isMobile, handleClose]);

  const menuChild = (
    <ConfigProvider theme={{ components: { Menu: { itemBg: colorBgContainer } } }}>
      <Menu
        items={menuItems}
        inlineIndent={30}
        css={styles.asideContainer}
        mode="inline"
        theme={isDark ? 'dark' : 'light'}
        selectedKeys={[selectedKey]}
      />
    </ConfigProvider>
  );

  return isMobile ? (
    <React.Fragment>
      <MobileMenu
        key="mobile-menu"
        contentWrapperStyle={{ width: '300px' }}
        open={state.mobileMenuVisible}
        onClose={handleClose}
      >
        {menuChild}
      </MobileMenu>
      {menuItems.length > 1 ? (
        <div css={styles.mobileMenu} onClick={handleShow}>
          <UnorderedListOutlined />
        </div>
      ) : null}
    </React.Fragment>
  ) : (
    <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24} css={styles.mainMenu}>
      <section className="main-menu-inner">{menuChild}</section>
    </Col>
  );
};

export default Sidebar;
