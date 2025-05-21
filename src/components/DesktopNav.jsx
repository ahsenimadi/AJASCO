import React from 'react';
    import { Link } from 'react-router-dom';
    import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
    import { cn } from '@/lib/utils';
    import { navItemsConfig } from '@/config/navConfig';
    import { getTranslation } from '@/lib/translations/index';

    const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      )
    });
    ListItem.displayName = "ListItem";

    const DesktopNav = ({ language }) => {
      const t = getTranslation(language);
      const navItems = navItemsConfig(t);

      return (
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              item.subItems ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent-foreground hover:bg-accent/10 dark:hover:bg-accent/20">
                    <span className="flex items-center space-x-2">
                      {item.icon} <span>{item.name}</span>
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={cn("grid gap-3 p-4 md:w-[500px] lg:w-[600px] bg-background dark:bg-gray-800", item.subItems.length > 4 ? "md:grid-cols-2" : "md:grid-cols-1" )}>
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name}>
                  <Link to={item.path}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground hover:text-accent-foreground hover:bg-accent/10 dark:hover:bg-accent/20")}>
                      <span className="flex items-center space-x-2">
                        {item.icon} <span>{item.name}</span>
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      );
    };

    export default DesktopNav;