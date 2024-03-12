import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
    const url = event.url.pathname;

    // /admin/* 경로이지만, /admin/statistics는 제외하고 리다이렉트 시키기
    if (url.startsWith('/admin') && url !== '/admin/statistics') {
        throw redirect(307, '/admin/statistics'); // 여기서 307은 임시 리다이렉션을 의미합니다. 필요에 따라 상태 코드를 변경할 수 있습니다.
    }
    if (url.startsWith('/dashboard') && url !== '/dashboard/statistic') {
        throw redirect(307, '/dashboard/statistic'); // 여기서 307은 임시 리다이렉션을 의미합니다. 필요에 따라 상태 코드를 변경할 수 있습니다.
    }

    return await resolve(event);
};
