/**
 * The Loader component is a React component that renders a loading spinner.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2024-01-18
 *
 * @returns {JSX.Element}} A React component.
 */
const Loader = (): JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent">
      </div>
    </div>
  );
};

export default Loader;
