export interface EventItem {
  title: string
  description: string
  href: string
  date: string
  time: string
  rules: EventRuleItem[]
  prize: EventPrizeItem
}

export interface EventRuleItem {
  title: string
  description?: string
}

export interface EventPrizeItem {
  first: string
  second: string
  third: string
  extra?: string
}