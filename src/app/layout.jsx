import LinkInterceptor from '@/components/LinkInterceptor';
import '@/css/app.css';

function RootLayout({ children }) {
    
    return (
        <html lang="en" data-theme="peoplepartner">
            <body className="overflow-hidden bg-white">
                <LinkInterceptor />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;