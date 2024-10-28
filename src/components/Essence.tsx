/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const PerfumeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const perfumes = [
    {
      name: "Midnight Rose",
      description: "A deep, sensual blend of Bulgarian rose and dark vanilla",
      price: "$120",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Ocean Breeze",
      description: "Fresh marine notes with hints of citrus and salt",
      price: "$95",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Golden Amber",
      description: "Warm amber combined with exotic spices",
      price: "$150",
      image: "/api/placeholder/300/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">AJ`S ESSENCE oud & attar</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Collections</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Collections</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
     
        <img 
          src="/api/placeholder/1920/600" 
          alt="Hero" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover Your Signature Scent
            </h2>
            <p className="text-xl text-white mb-8">
              Luxury fragrances for the discerning individual
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Fragrances</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={perfume.image} 
                alt={perfume.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{perfume.name}</h4>
                <p className="text-gray-600 mb-4">{perfume.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{perfume.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-8">Stay updated with our latest collections and exclusive offers</p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-600">
                Luxury perfumes crafted with the finest ingredients for the modern connoisseur.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Pinterest</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>1234 Perfume Street</li>
                <li>New York, NY 10001</li>
                <li>Tel: (555) 123-4567</li>
                <li>Email: info@essence.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 ESSENCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PerfumeWebsite;