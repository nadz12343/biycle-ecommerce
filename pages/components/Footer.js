
export default function Footer(){
    return (
        <footer class="grid grid-cols-2 gap-20 p-64 leading-loose text-white bg-footer sm:grid-cols-4 h-fit mt-256">
        <div class="flex flex-col items-center">
            <h6 class="mb-32 font-bold underline">Customer Service</h6>
            <p>Contact Us</p>
            <p>Track your order</p>
        </div>

        <div class="flex flex-col items-center">
            <h6 class="mb-32 font-bold underline">More</h6>
            <p>Terms of Supply</p>
            <p>Terms of Use</p>
            <p>Personal Data</p>
            <p>Cookie Policy</p>
            <p>Blog</p>
            <p>Bloggers Community</p>
        </div>

        <div class="flex flex-col items-center">
            <h6 class="mb-32 font-bold underline">About Decathlon</h6> 
            <p>About us</p>
            <p>Careers</p>
            <p>Corporate Website</p>
            <p>Modern Slavery Report</p>
            <p>Gender Pay Gap Report</p>
            <p>Decathlon Activity Index</p>
            <p>Affiliate Program</p>
            <p>Press Room</p>
        </div>

        <div class="flex flex-col">
            <h6 class="mb-32 font-bold underline">Subscribe</h6> 

            <input type="text" class="p-16 mb-16 text-white bg-transparent border-2 rounded-md border-text-color" placeholder="Enter your email"/>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>

        </div>
    </footer>
    )
}