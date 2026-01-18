
import { Box, IconButton, OutlinedInput } from "@mui/material";
import Post from "../components/Post";
import Comments from '../components/Comments'

import { Send as AddCommentIcon } from "@mui/icons-material";

import { useParams } from "react-router"

const api = "http://localhost:8800"

export default function Show() {

	const {id} = useParams()
	return (
		<Box>
			<Post post={post} />

			<Box sx={{ mb: 2 }}>
				<form>
					<OutlinedInput
						fullWidth
						placeholder="Your comment..."
						endAdornment={
							<IconButton>
								<AddCommentIcon />
							</IconButton>
						}
					/>
				</form>
			</Box>

			{post.comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</Box>
	);
}
