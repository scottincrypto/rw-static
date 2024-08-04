---
title: Stader Treasury by TokenLogic
---

```sql current_day
select
  block_day
  , pool_balance
  , reward_balance
  , token_balance
  , balance
  , cumu_invested
  , apr
  , pnl
  , (balance-token_balance)/balance as funds_allocated
from tokenlogic_data.treasury_returns
order by block_day desc limit 1
```
<Grid cols=3>
  <BigValue
    data={current_day}
    value=cumu_invested
    title="Total Invested"
    fmt='usd0'
  />
  <BigValue
    data={current_day}
    value=balance
    title="Treasury Value"
    fmt='usd0'
  />
  <BigValue
    data={current_day}
    value=funds_allocated
    title="Funds Allocated"
    fmt='pct1'
  />
  <BigValue
    data={current_day}
    value=pnl
    title="Profit & Loss"
    fmt='usd0'
  />
  <BigValue
    data={current_day}
    value=reward_balance
    title="Rewards to be Claimed"
    fmt='usd0'
  />
  <BigValue
    data={current_day}
    value=apr
    title="APR"
    fmt='pct1'
  />
</Grid>


```sql treasury_charts
select 
  block_day
  , balance 
from tokenlogic_data.treasury_returns
order by block_day
```

```sql pool_charts
select 
  block_day
  , protocol || ' ' || pool as pool 
  , balance
  , apr 
  , pnl 
from tokenlogic_data.pool_returns
where balance > 0
union all 
select 
  block_day
  , 'Token Holdings' as pool
  , token_balance as balance
  , 0 as apr 
  , 0 as pnl
from tokenlogic_data.treasury_returns
```

```sql pool_apr
select 
  block_day
  , protocol || ' ' || pool as pool 
  , apr 
from tokenlogic_data.pool_returns
where balance > 0 and apr > -0.5
union all 
select 
  block_day
  , 'Treasury' as pool 
  , apr 
from tokenlogic_data.treasury_returns
order by block_day, pool 
```



<LineChart
  data={treasury_charts}
  x=block_day
  y=balance
  chartAreaHeight=400
  title="Treasury Value"
  echartsOptions={{
      dataZoom: [
          {
              start: 0,
              end: 100,
          },
      ],
      grid: {
          bottom: '50px',
      },
  }}
/>


<AreaChart
  data={pool_charts}
  x=block_day
  y=balance
  series=pool
  chartAreaHeight=400
  title="Treasury Value by Pool"
  legend=false
  echartsOptions={{
      dataZoom: [
          {
              start: 0,
              end: 100,
          },
      ],
      grid: {
          bottom: '50px',
      },
  }}
/>

<LineChart
  data={pool_apr}
  x=block_day
  y=apr
  series=pool
  chartAreaHeight=400
  title="APR by Pool"
  legend=false
  yFmt='pct1'
  echartsOptions={{
      dataZoom: [
          {
              start: 0,
              end: 100,
          },
      ],
      grid: {
          bottom: '50px',
      },
  }}
/>