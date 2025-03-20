## Family Multi-Tree Data Editor

This is the web application of an all-in-one tool for creating and later on maintenance of the data files in JSON and CSV formats for the Family Multi-Tree viewer application.

Usage is as simple as possible and includes the following steps:

- Drag-and-drop a JSON file to the "Data in JSON format:" text area,
- Alternatively, paste JSON file content into the "Data in JSON format:" text area,
- Convert data to CSV format with the "<" button,
- Edit data in the table (be patient while changing the data),
- Convert data back to JSON with the ">" button and
- Download them as a new modified JSON file with the "<<" button.

In addition, context of both CSV and JSON format text areas can be selected, copied and pasted from/into a local file.

### The application can be accessed at the following address:

[Family Multi-Tree Data Editor](https://chradev.github.io/Family-Multi-Tree/editor/)

### Notes: 
- CSV export with the ">>" button is not implemented for now;
- Do not delete, add or move columns into the table;
- It is up to the editor to add before/after and delete  rows in the table;
- Drag-and-drop pictures in PNG or JPEG formats or paste their Data URL  only in the column "Photo" of the table;
- Updating of the CSV text area content after pasting the photo requires at least one modification in another textual cell;

### Implementation

The current application is written in HTML, CSS and pure JavaScript and should work on any device and OS with any modern browser. The application is not error-free, and data are not verified, so it is up to the user to know what to do. It is made thanks to the following projects:
- [Daniel Geymayer's "Simple CSV Editor" project](https://github.com/dag0310/simple-csv-editor),
- [Matt Holt's "Parse CSV with JavaScript" project](https://github.com/mholt/PapaParse),
- [Emmanuel Sekyere's "CSV JSON convertor" project](https://github.com/wesscoby/csv-json-convertor) etc.
