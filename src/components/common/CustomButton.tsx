export default function CustomButton(text: any): JSX.Element {
    return (
        <div className="whitespace-nowrap min-w-32 cursor-pointer w-fit px-3 h-10 bg-neon uppercase font-primary-light  shadow-black border-neon border-2 shadow-md text-black text-sm flex items-center justify-center">
            <p>{text.text}</p>
        </div>
    );
}
