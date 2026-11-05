/**
 * 自定义语言切换：在首页（路由为 `/` 或以 `/index` 开头）切换语言时，
 * 指向与 DocLayout 首页规则一致的中文/繁体首页路由 `/index-cn`、`/index-tw`，
 * 而不是 dumi 默认按后缀拼出的 `/-cn`、`/-tw`（后者会被 DocLayout 当作文档页渲染侧边栏）。
 */
import { Select } from 'antd';
import { history, Link, useAppData, useIntl, useLocale, useLocation, useSiteData } from 'dumi';
import React, { useEffect, useState } from 'react';


// 首页路由与语言后缀的映射（与 DocLayout 的首页判定保持一致）
const HOME_ROUTES: Record<string, string> = {
    '': '/',
    '-cn': '/index-cn',
    '-tw': '/index-tw',
};

// 是否与 DocLayout 的“首页”判定一致：pathname 为 `/` 或以 `/index` 开头
const isHomeRoute = (pathname: string): boolean =>
    pathname === '' || pathname === '/' || pathname.startsWith('/index');

// 把带部署 base 前缀的完整 pathname 还原为相对路径（base 可能带或不带结尾斜杠），
// 以便后续按相对路径计算目标，最后再交给 dumi 的 history 自动补回 base，避免重复拼接。
const toRelative = (pathname: string, base: string): string => {
    const b = base.replace(/\/$/, '');
    if (pathname === b) return '/';
    if (pathname.startsWith(`${b}/`)) return pathname.slice(b.length);
    return pathname;
};

// 与 dumi locale 对象兼容的宽松类型（id/name 必有，suffix/base 可选）
type LocaleLike = { id: string; name?: string; suffix?: string; base?: string };

// dumi 原生 getTargetLocalePath 逻辑：去掉当前后缀、拼上目标后缀
const getTargetLocalePath = ({
    pathname,
    current,
    target,
}: {
    pathname: string;
    current: LocaleLike;
    target: LocaleLike;
}): string => {
    const clearPath =
        'base' in current
            ? pathname.replace(current.base!.replace(/\/$/, ''), '') || '/'
            : pathname.replace(new RegExp(`${current.suffix}$`), '');
    return 'base' in target
        ? `${target.base!.replace(/\/$/, '')}${clearPath}`.replace(/([^/])\/$/, '$1')
        : `${clearPath}${target.suffix}`;
};

const resolveTargetPath = (
    pathname: string,
    current: LocaleLike,
    target: LocaleLike,
): string => {
    // 首页：始终映射到对应语言的首页路由
    if (isHomeRoute(pathname)) {
        return HOME_ROUTES[target.suffix ?? ''] ?? '/';
    }
    return getTargetLocalePath({ pathname, current, target });
};

const SingleSwitch: React.FC<{
    locale: LocaleLike;
    current: LocaleLike;
}> = ({ locale, current }) => {
    const { pathname } = useLocation();
    const { basename = '' } = useAppData() as { basename?: string };
    const relPath = toRelative(pathname, basename);
    const [path, setPath] = useState(() => resolveTargetPath(relPath, current, locale));
    useEffect(() => {
        setPath(resolveTargetPath(relPath, current, locale));
    }, [relPath, current.id, locale.id]);

    return (
        <Link className="dumi-default-lang-switch" to={path}>
            {locale.name}
        </Link>
    );
};

const LangSwitch: React.FC = () => {
    const { locales } = useSiteData();
    const { locale } = useIntl();
    const current = useLocale();
    // useLocation().pathname 是带部署 base 前缀的完整路径；剥离 base 后再计算目标，
    // 由 dumi 的 history 自动补回 base，避免部署到带前缀路径时重复拼接 base。
    const { pathname } = useLocation();
    const { basename = '' } = useAppData() as { basename?: string };
    const relPath = toRelative(pathname, basename);

    // 单语言时不渲染
    if (locales.length <= 1) {
        return null;
    }

    if (locales.length > 2) {
        return (
            <div className="dumi-default-lang-select">
                <Select
                    value={locale}
                    options={locales.map((item) => ({ label: item.name, value: item.id }))}
                    size='small'
                    popupMatchSelectWidth={false}
                    onChange={(value: string) => {
                        const target = locales.find((item) => item.id === value);
                        if (target) {
                            history.push(resolveTargetPath(relPath, current, target));
                        }
                    }}
                />
            </div>
        );
    }

    // 双语言：单按钮切换
    const other = locales.find((item) => item.id !== locale);
    return other ? <SingleSwitch locale={other} current={current} /> : null;
};

export default LangSwitch;
