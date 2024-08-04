

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
