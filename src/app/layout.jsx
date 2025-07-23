import LinkInterceptor from '@/components/LinkInterceptor';
import '@/css/app.css';

function RootLayout({ children }) {
    
    return (
        <html lang="en" data-theme="peoplepartner">
            <body className="overflow-hidden bg-stripe-diagonal stripe-color-primary/[0.05]">
                <LinkInterceptor />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;