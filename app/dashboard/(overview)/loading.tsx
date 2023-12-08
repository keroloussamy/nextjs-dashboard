import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}

//With (overview) Route Groups, the loading.tsx file will only apply to your dashboard overview page, without affecting the URL path structure.
