import DashboardBox from '@/components/DashboardBox';
import { useGetKpiQuery } from '@/state/api';

const Row1 = () => {
  const { data } = useGetKpiQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
