import React from 'react';

interface CadastroTemplateProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const CadastroTemplate: React.FC<CadastroTemplateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {title}
            </h1>
            {description && (
              <p className="text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

