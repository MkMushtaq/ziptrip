import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className=" text-gray-300">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <p className="text-lg">
                            We are a company dedicated to providing innovative solutions for our customers.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-lg">© 2023 Your Company. All rights reserved.</div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}