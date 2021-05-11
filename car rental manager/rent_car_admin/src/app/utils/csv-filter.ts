const mimeTypes = ['text/plain', 'text/csv', 'application/vnd.ms-excel'];
export default function csvFilter(file: File) {
    if (validateCsvFile(file)) {
        return true;
    } else {
        return false;
    }
}

function validateCsvFile(file: File): boolean {
    return (
        file.name?.match(/\.(csv|txt)$/i) &&
        mimeTypes.includes(file.type)
    );
}