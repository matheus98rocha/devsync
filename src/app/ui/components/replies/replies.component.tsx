import Reply from "./components/reply.component";
import { RepliesProps } from "./replies.types";

const Replies = ({ showReplies, handleShowReplies }: RepliesProps) => {
    return (
        <>
            {
                showReplies &&
                <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center  animate-fade delay-100">
                    <div className="fixed inset-0 bg-zinc-800 opacity-60"
                        onClick={() => handleShowReplies(false)}
                    ></div>

                    <div className="
                    h-96 
                    w-96
                    px-10
                    py-10
                    overflow-y-auto  


                    flex items-center content-center flex-col gap-14

                    relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 

                    animate-fade-up animate-once animate-duration-500 animate-delay-200 animate-alternate animate-fill-both

                    sm:max-w-lg
                    sm:w-full 
                ">
                        <Reply />
                        <Reply />
                        <Reply />
                        <Reply />
                    </div>
                </div>
            }
        </>
    )
};

export default Replies;