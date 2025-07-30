'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='max-w-2xl w-full'>
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>Error</h1>
          <p className='text-gray-600'>
            An error occurred while processing your request.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Error Details
          </h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-sm font-medium text-gray-700 mb-1'>
                Message:
              </h3>
              <p className='text-sm text-gray-900 bg-gray-50 p-3 rounded'>
                {error.message}
              </p>
            </div>

            {error.stack && (
              <div>
                <h3 className='text-sm font-medium text-gray-700 mb-1'>
                  Stack Trace:
                </h3>
                <pre className='text-xs text-gray-900 bg-gray-50 p-3 rounded overflow-auto max-h-96'>
                  {error.stack}
                </pre>
              </div>
            )}

            {error.digest && (
              <div>
                <h3 className='text-sm font-medium text-gray-700 mb-1'>
                  Error ID:
                </h3>
                <p className='text-sm text-gray-900 bg-gray-50 p-3 rounded font-mono'>
                  {error.digest}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
