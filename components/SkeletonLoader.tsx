import React from 'react';

const Skeleton = ({ className }: { className?: string }) => <div className={`skeleton ${className}`} />;

const SkeletonLoader = () => (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="lg:flex lg:justify-between lg:gap-16">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                 <div className="flex flex-col items-center lg:items-start space-y-4">
                    <Skeleton className="h-40 w-40 rounded-full" />
                    <div className="w-full space-y-3 pt-4 text-center lg:text-left">
                        <Skeleton className="h-10 w-3/4 mx-auto lg:mx-0" />
                        <Skeleton className="h-6 w-1/2 mx-auto lg:mx-0" />
                        <Skeleton className="h-5 w-full max-w-xs mx-auto lg:mx-0" />
                    </div>
                </div>
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24 space-y-16">
                <section>
                    <Skeleton className="h-5 w-full mb-2" />
                    <Skeleton className="h-5 w-full mb-2" />
                    <Skeleton className="h-5 w-3/4" />
                </section>
                <section>
                    <Skeleton className="h-32 w-full mb-4" />
                    <Skeleton className="h-32 w-full" />
                </section>
            </main>
        </div>
    </div>
);

export default SkeletonLoader;