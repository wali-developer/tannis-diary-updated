import { useRouter } from "next/router";
import { useState } from "react"
import AuthLayout from "./AuthLayout";
import Header from "./Header"
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar"

const CustomeLayout = ({ children }) =>
{
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const router = useRouter()



    return (

        <>

            { (router?.pathname === "/" || router?.pathname.includes('auth')) ? (
                < AuthLayout >
                    { children }
                </AuthLayout>
            ) : (
                <>
                    <div className="flex min-h-screen">
                        <Sidebar />
                        <div className="flex-1 flex flex-col relative">
                            <Header
                                onMenuButtonClicked={ () => setShowMobileSidebar(true) }
                            />
                            { children }
                        </div>
                    </div>

                    <MobileSidebar
                        visibility={ showMobileSidebar }
                        onCloseButtonClicked={ () => setShowMobileSidebar(false) }
                    />
                </>)
            }

        </>
    )
}

export default CustomeLayout