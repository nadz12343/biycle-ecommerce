
export default function Footer(){
    return (
    <footer class="flex flex-wrap justify-between p-24 text-white bg-footer h-fit mt-256">

        <div class="flex flex-col pb-32">
            <h6 class="mb-16 font-bold underline text-h4s md:text-h6">Useful Links</h6>
            <p className = "text-p">About Us</p>
            <p className = "text-p">Privacy Policy</p>
        </div>

        <div class="flex flex-col pb-32">
            <h6 class="mb-16 font-bold underline text-h4s md:text-h6">Customer Service</h6>
            <p>Contact Us</p>
            <p>Track your order</p>
            <p>Cookie Policy</p>

        </div>

        <div class="flex flex-col  pb-32">
            <h6 class="mb-16 font-bold underline text-h4s md:text-h6">Sitemap</h6>
            <p>Contact Us</p>
            <p>Track your order</p>
        </div>

        <div class="flex flex-col pb-32">
            <h6 class="mb-16 font-bold underline">Subscribe</h6> 

            <input type="text" class="p-16 mb-16 text-white bg-transparent border-2 rounded-md border-text-color w-full" placeholder="Enter your email"/>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>

        </div>
    </footer>
    )
}