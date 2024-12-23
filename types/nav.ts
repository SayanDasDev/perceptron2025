import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  description?: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
