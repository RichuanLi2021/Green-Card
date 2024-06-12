import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import '../pages/admin/Feedback.css';


const columnWidths = {
    name: '15%',
    email: '25%',
    comment: '30%',
    rating: '10%',
    subscribe: '10%',
    date: '10%',
};

const truncateText = (text, maxLength) => {
    if (typeof text !== 'string' || maxLength <= 0) return '';

    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const FeedbackTable = ({ title, data, selectedReviews, handleSelectReview, setSelectedFeedback, setPopupOpen }) => (
    <>
        <Typography variant="h6" className="title" mb={1} mt={2}>
            {title}
        </Typography>
        <TableContainer component={Paper}>
            <Table aria-label="feedback table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">Select</TableCell>
                        <TableCell sx={{ width: columnWidths.name }}>Name</TableCell>
                        <TableCell sx={{ width: columnWidths.email }}>Email</TableCell>
                        <TableCell sx={{ width: columnWidths.comment }}>Comment</TableCell>
                        <TableCell sx={{ width: columnWidths.rating }}>Overall Rating</TableCell>
                        <TableCell sx={{ width: columnWidths.subscribe }}>Subscribe</TableCell>
                        <TableCell sx={{ width: columnWidths.date }}>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((feedback) => (
                        <TableRow
                            key={feedback.uuid}
                            onClick={() => { setSelectedFeedback(feedback); setPopupOpen(true); }}
                            sx={{ backgroundColor: feedback.reviewed ? '#f0f0f0' : 'inherit' }}
                        >
                            <TableCell padding="checkbox" onClick={(event) => event.stopPropagation()}>
                                <Checkbox
                                    checked={selectedReviews?.includes(feedback.uuid)}
                                    onChange={(event) => handleSelectReview(event, feedback.uuid)}
                                />
                            </TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.name }}>{feedback.name}</TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.email }}>{feedback.email}</TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.comment }}>{truncateText(feedback.comment, 40)}</TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.rating }}>{feedback.rating}</TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.subscribe }}>{feedback.allowEmailBack ? "Yes" : "No"}</TableCell>
                            <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold', width: columnWidths.date }}>{new Date(feedback.createdAt).toLocaleDateString('en-ca')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
);

export default FeedbackTable;
