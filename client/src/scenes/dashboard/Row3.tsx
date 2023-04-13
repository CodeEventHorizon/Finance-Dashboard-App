import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import {
  useGetKpiQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from '@/state/api';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Box, useTheme, Typography } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import { Cell, Pie, PieChart } from 'recharts';
import { useMemo } from 'react';

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];
  const { data: kpiData } = useGetKpiQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: parseFloat(value.replace('$', '').replace(',', '')),
            },
            {
              name: `${key} of Total`,
              value:
                parseFloat(totalExpenses.replace('$', '').replace(',', '')) -
                parseFloat(value.replace('$', '').replace(',', '')),
            },
          ];
        }
      );
    }
  }, [kpiData]);

  const productColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`,
    },
  ];

  const transactionsColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'buyer',
      headerName: 'Buyer',
      flex: 0.67,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.35,
      renderCell: (params: GridCellParams) => `${params.value}`,
    },
    {
      field: 'productIds',
      headerName: 'Count',
      flex: 0.1,
      renderCell: (params: GridCellParams) => (params.value as string).length,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Porducts"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}>
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionsData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}>
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionsData || []}
            columns={transactionsColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem">
          <Box
            height="15px"
            width="40%"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          semper turpis in porttitor vulputate. Praesent ligula velit, egestas
          ac euismod ut, consequat et orci. Pellentesque suscipit tellus vitae
          metus gravida, eget viverra odio vestibulum. Quisque varius ipsum eu
          cursus convallis. Etiam et mollis nisi. Vivamus et sagittis erat,
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
