export interface EventItem {
  title: string
  description: string
  href: string
  date: string
  time: string
  rules: EventRuleItem[]
}

export interface EventRuleItem {
  title: string
  description?: string
}

export interface EventPrizeItem {
  title: string
  description?: string
}