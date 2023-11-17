import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='fixed bottom-2 left-1/2 translate-x-[-50%] bg-[#fafafa] rounded dark:bg-[#242424] p-2 text-xs'>
      <div className="w-full text-center flex items-center gap-2 justify-center">
        <span>Developed by</span>
        <a
          className="inline-block rounded-md px-2 py-1 text-black bg-[#e6e6e6] hover:bg-[#555] hover:text-white group select-none"
          style={{transition:'background-color 0.3s, color 0.3s'}}
          href="https://github.com/Jo-varo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center">
            <AiFillGithub className="mr-1 text-xl group-hover:svg-icon" />
            Jo-Varo
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;