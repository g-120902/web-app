
/**
 * The Footer component is a simple footer that displays the copyright information and a link
 * to the booking engine website.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2023-01-15
 *
 * @returns {JSX.Element} The Footer component is being returned.
 */
export default function Footer(): JSX.Element {
    const currentDate = new Date();

    return(
        <footer className="text-center text-white mt-10 bg-gray-800">
          <span className="uppercase">paragon softwares</span>
        </footer>
    );
}
