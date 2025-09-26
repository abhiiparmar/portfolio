import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-6 md:px-20 border-t border-gray-700">
            <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Abhishek Parmar. All rights reserved.</p>
                <p className="mt-2 text-sm text-gray-500">
                    Thank you for visiting my portfolio!
                </p>
            </div>
        </footer>
    );
}

export default Footer;
