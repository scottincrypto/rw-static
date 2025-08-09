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

## Treasury Performance
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


```sql open_positions
select distinct 
  protocol || ' ' || pool as open_pool
  , '/open_positions/' || protocol || ' ' || pool as open_pool_link
  , cumu_invested as invested
  , balance as total_holdings
  , pnl as PnL
  , apr as APR
from tokenlogic_data.pool_returns
where 1=1
  and balance > 0
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)
```

## Open Positions

_Click pool to open position details_

<DataTable
  data={open_positions}
  link=open_pool_link
  >
  <Column id=open_pool title="Pool"/>
  <Column id=invested title="Invested" fmt='usd0'/>
  <Column id=total_holdings title="Total Holdings" fmt='usd0'/>
  <Column id=PnL title="PnL" fmt='usd0'/>
  <Column id=APR title="APR" fmt='pct1'/>

</DataTable>



```sql treasury_charts
select 
  block_day
  , balance 
  , pnl
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

## Treasury Value

<LineChart
  data={treasury_charts}
  x=block_day
  y=balance
  chartAreaHeight=400
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

## Treasury Value by Pool

<AreaChart
  data={pool_charts}
  x=block_day
  y=balance
  series=pool
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

## Profit & Loss

<LineChart
  data={treasury_charts}
  x=block_day
  y=pnl
  chartAreaHeight=400
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

## APR by Pool

<LineChart
  data={pool_apr}
  x=block_day
  y=apr
  series=pool
  chartAreaHeight=400
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


```sql closed_positions
select distinct 
  protocol || ' ' || pool as closed_pool
  , '/closed_positions/' || protocol || ' ' || pool as closed_pool_link
  , cumu_invested as invested
  , cumu_withdrawn as withdrawn
  , pnl as PnL
    , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
  , block_day as closed_date
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
```

## Closed Positions

_Click pool to open position details_

<DataTable
  data={closed_positions}
  link=closed_pool_link
  openInNewTab=true
  >
  <Column id=closed_pool title="Pool"/>
  <Column id=invested title="Invested" fmt='usd0'/>
  <Column id=withdrawn title="Withdrawn" fmt='usd0'/>
  <Column id=PnL title="PnL" fmt='usd0'/>
  <Column id=APR title="APR" fmt='pct1'/>
  <Column id=closed_date title="Closed Date" fmt='yyyy-mm-dd'/>

</DataTable>


<LastRefreshed prefix="Data last updated"/>