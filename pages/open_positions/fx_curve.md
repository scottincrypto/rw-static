

<!-- 
investment
current holdings
pnl
rewards to be claimed
apr

pnl chart

holdings split by type (rewards, pool)

apr chart

rewards split by token type

 -->

```sql pool_current 
select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where pool='Convex Gauge for GHO/fxUSD Curve LP'
order by block_day desc limit 1
```

```sql pool_data
select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where pool='Convex Gauge for GHO/fxUSD Curve LP'
order by block_day 
```

```sql pool_holdings
select 
  block_day
  , 'Pool' as type
  , pool_balance as balance
from ${pool_data}
union all 
select 
  block_day
  , 'Rewards' as type
  , rewards as balance
from ${pool_data}
order by block_day, type 
```

```sql pool_rewards
select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and pool='Convex Gauge for GHO/fxUSD Curve LP'
```


<Grid cols=2>
  <BigValue
    data={pool_current}
    value=cumu_invested
    title="Total Invested"
    fmt='usd0'
  />
  <BigValue
    data={pool_current}
    value=balance
    title="Current Holdings"
    fmt='usd0'
  />
</Grid>
<Grid cols=3>
  <BigValue
    data={pool_current}
    value=pnl
    title="Profit & Loss"
    fmt='usd0'
  />
  <BigValue
    data={pool_current}
    value=rewards
    title="Rewards to be Claimed"
    fmt='usd0'
  />
  <BigValue
    data={pool_current}
    value=apr
    title="APR"
    fmt='pct1'
  />
</Grid>

<LineChart
  data={pool_data}
  x=block_day
  y=pnl
  chartAreaHeight=400
  title="Profit & Loss"
  yFmt='usd0'
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
  data={pool_holdings}
  x=block_day
  y=balance
  series=type
  chartAreaHeight=400
  title="Pool Holdings"
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
  data={pool_data}
  x=block_day
  y=apr
  chartAreaHeight=400
  title="APR"
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

<AreaChart
  data={pool_rewards}
  x=block_day
  y=balance_usd
  series=symbol
  chartAreaHeight=400
  title="Unclaimed Rewards"
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