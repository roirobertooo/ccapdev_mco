import Link from 'next/link';
import Image from 'next/image';

import {useFetchData, TruncateText, formatDateToLocal} from '@/app/lib/utils';
import {UserAccount, Comment} from '@/app/lib/definitions';

interface CommentSectionProps {
    comment: Comment;
}

function CommentSection({comment}: CommentSectionProps) {
    const ownerFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${comment?.user_id}`;
    const [ownerData, ownerError] = useFetchData<UserAccount[]>(comment ? ownerFetchString : "");
    const owner = ownerData ? ownerData[0] : null;

    return (
        comment && owner ? (
            <div className="px-2 pt-4">
                <div className="flex flex-row gap-2 items-center">
                    <Link href={"#"}>
                        <Image src={owner.avatar_url} alt="" width={50} height={50}
                               className="rounded-full border border-1 unselectable"/>
                    </Link>

                    <div>
                        <Link href={"#"} className="hover:underline font-bold">{owner.name}</Link>
                        <p className="text-sm text-gray-500">{formatDateToLocal(comment.date)}</p>
                    </div>
                </div>

                <p className="pt-4 ml-2">
                    <TruncateText text={comment.comment_body} maxChar={100} includeQuotes={false}/>
                </p>
            </div>
        ) : (
            <p>Comment loading...</p>
        )
    );
}

export default CommentSection;