select 
  block_day
  , protocol
  , pool
  , address
  , holding_type
  , symbol
  , sum(balance) as balance
  , sum(balance_usd) as balance_usd
from datamart_treasury.stader_treasury_base
group by 
  block_day
  , protocol
  , pool
  , address
  , holding_type
  , symbol
order by block_day, pool
