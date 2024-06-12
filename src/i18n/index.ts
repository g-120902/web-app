import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

/**
 * The getRequestConfig function is used by the next-intl library to provide the necessary configuration information to
 * the Intl object, which is used to localize strings in a React application.
 * This function takes a function as an argument, which is responsible for returning a configuration object for the
 * next-intl library.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2024-01-31
 */
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./lang/${locale}.json`)).default
  };
});
