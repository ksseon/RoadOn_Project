const NoticeItem = ({ notice }) => {
    const { date, category, title, views } = notice;
    return (
        <tr>
            <td data-label="등록일">{date}</td>
            <td data-label="제목">
                <strong>
                    [{category}] {title}
                </strong>
            </td>
            <td data-label="조회수">
                <div className="product-name ellipsis-2">{views}</div>
            </td>
        </tr>
    );
};

export default NoticeItem;
