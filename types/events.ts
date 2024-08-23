export interface EventItem {
  title: string
  description: string
  href: string
  dateTime: Date
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