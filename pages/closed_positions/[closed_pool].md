

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
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${params.closed_pool}'

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
where protocol || ' ' || pool = '${params.closed_pool}'
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
  and protocol || ' ' || pool = '${params.closed_pool}'
  and block_day < (select block_day from ${pool_current})
```

# {params.closed_pool}

<Grid cols=2>
  <BigValue
    data={pool_current}
    value=cumu_invested
    title="Invested"
    fmt='usd0'
  />
  <BigValue
    data={pool_current}
    value=cumu_withdrawn
    title="Withdrawn"
    fmt='usd0'
  />
</Grid>
<Grid cols=2>
  <BigValue
    data={pool_current}
    value=pnl
    title="Profit & Loss"
    fmt='usd0'
  />
  <BigValue
    data={pool_current}
    value=apr
    title="APR"
    fmt='pct1'
  />
</Grid>

## Profit & Loss
<LineChart
  data={pool_data}
  x=block_day
  y=pnl
  chartAreaHeight=400
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

## Pool Holdings
<AreaChart
  data={pool_holdings}
  x=block_day
  y=balance
  series=type
  chartAreaHeight=400
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

## APR
<LineChart
  data={pool_data}
  x=block_day
  y=apr
  chartAreaHeight=400
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

## Rewards
<AreaChart
  data={pool_rewards}
  x=block_day
  y=balance_usd
  series=symbol
  chartAreaHeight=400
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