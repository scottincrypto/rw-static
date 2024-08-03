---
title: Stader Treasury by TokenLogic
---

## Treasury Value

```sql treasury_value
select 
  block_day
  , balance 
from tokenlogic_data.treasury_returns
order by block_day
```

<LineChart
  data={treasury_value}
  x=block_day
  y=balance
  chartAreaHeight=400
/>


