"use client"
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Moon, 
  Sun, 
  Bell, 
  HelpCircle,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
   const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const suggestions = ['shirt', 't-shirt', 'mobiles', 'laptop', 'shoes'];
 

    useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % suggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const dynamicPlaceholder = `Search ${suggestions[placeholderIndex]}...`;

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        {/* Top Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

             {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                SHOPPI
              </div>
            </div>


            {/* Search Bar - First */}
             <div className="flex-1 max-w-md sm:max-w-lg lg:max-w-2xl">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder={dynamicPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-900 dark:text-white bg-white text-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
    </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative p-2 cursor-pointer">
                <ShoppingCart className="size-6 sm:h-5 sm:w-5 text-black dark:text-white" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-black dark:bg-white text-white dark:text-black">
                  5
                </Badge>
              </Button>

              {/* User Account with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 cursor-pointer">
                    <User className="size-6 sm:h-5 sm:w-5 text-black dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-black border-gray-200 dark:border-gray-800">
                  <DropdownMenuItem className="text-black dark:text-white cursor-pointer">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-black dark:text-white flex items-center cursor-pointer">
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                    <Badge className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs bg-black dark:bg-white text-white dark:text-black">
                      2
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={toggleDarkMode}
                    className="text-black dark:text-white flex items-center cursor-pointer"
                  >
                    {isDark ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Three Dots Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 cursor-pointer">
                    <MoreVertical className="size-6 sm:h-5 sm:w-5 text-black dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-black border-gray-200 dark:border-gray-800">
                  <DropdownMenuItem className="text-black dark:text-white cursor-pointer">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Offers
                    <Badge className="ml-auto text-xs bg-black dark:bg-white text-white dark:text-black">
                      Hot
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-black dark:text-white flex items-center cursor-pointer">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-black dark:text-white flex items-center cursor-pointer">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                    <Badge className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs bg-black dark:bg-white text-white dark:text-black">
                      3
                    </Badge>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Secondary Navigation - Always Visible Categories Row */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-6 sm:space-x-8 md:space-x-12 py-3 sm:py-4">
              <a
                href="#"
                className="text-xs sm:text-sm font-medium text-black dark:text-white transition-colors duration-200 px-2 py-1"
              >
                Men's
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm font-medium text-black dark:text-white transition-colors duration-200 px-2 py-1"
              >
                Women's
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm font-medium text-black dark:text-white transition-colors duration-200 px-2 py-1"
              >
                Kids
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm font-medium text-black dark:text-white transition-colors duration-200 px-2 py-1"
              >
                Mobiles
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm font-medium text-black dark:text-white transition-colors duration-200 px-2 py-1"
              >
                Electronics
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;