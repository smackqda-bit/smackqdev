export default function Stack() {
    return (
        <div className=" mt-20">
            <h1 className="text-2xl text-white  px-5 sm:px-10">Tech Stack</h1>
            <hr className="text-white/10 mt-4"/>

            <div className=" mx-5 sm:mx-10 grid sm:gap-10 grid-cols-1 sm:grid-cols-2">
                <div>
                    <h2 className="text-xl mb-5 mt-10 text-white">Frontend</h2>
                    <ul className="pl-10 flex flex-col text-white/50 list-disc">
                        <li>React.js, Next.js</li>
                        <li>JavaScript (ES6+), TypeScript</li>
                        <li>Tailwind CSS, shadcn/ui</li>
                    </ul>

                    <h2 className="text-xl mb-5 mt-10 text-white">DevOps & Infrastructure</h2>
                    <ul className="pl-10 flex flex-col text-white/50 list-disc">
                        <li>AWS (EC2, S3, Lambda, CloudFront, etc)</li>
                        <li>Cloudflare</li>
                        <li>Vercel</li>
                    </ul>

                </div>

                <div className="">
                    <h2 className="text-xl text-white mb-5 mt-10 ">Backend</h2>
                    <ul className="pl-10 flex flex-col text-white/50 list-disc">
                        <li>Fast API</li>
                        <li>Next API</li>
                        <li>Flask</li>
                    </ul>

                    <h2 className="text-xl text-white mb-5 mt-10">Databases</h2>
                    <ul className="pl-10 flex flex-col text-white/50 list-disc">
                        <li>PostgreSQL</li>
                        <li>Supabase</li>
                        <li>SQlite</li>
                    </ul>

                    <h2 className="text-xl text-white mb-5 mt-10">Other Skills</h2>
                    <ul className="pl-10 flex flex-col text-white/50 list-disc">
                        <li>Python</li>
                        <li>Web security and data protection (SOC 2 compliance)</li>
                        <li>CI/CD implementation</li>
                        <li>Code quality, testing (unit, feature, integration tests)</li>
                    </ul>
                </div>
                

            </div>
        </div>
    )
}