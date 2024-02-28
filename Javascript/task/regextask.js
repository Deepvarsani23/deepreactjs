/* E-Mail */

{
    // const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;

    // console.log(email.test(prompt("Enter The Mail: ")));
}

 /* Number */

{
    // const regex2 = /(\d{3})\D(\d{3})\D(\d{2})\D(\d{2})/g;
    // const result3 = regex2.test('123 123 12 12.');
    // console.log(result3);
   
}

{
    const regex2 = /(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})/g;
    const result3 = regex2.test('12 12 12 12 12.');
    console.log(result3);
}

{
    // const regex2 = /(\d{4})\D(\d{4})\D(\d{2})/g;
    // const result3 = regex2.test('1234 1234 12.');
    // console.log(result3);
}

{
    // const regex2 = /(\d{2})\D(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
    // const result3 = regex2.test('12-12-12-12-12.');
    // console.log(result3);
}

{
    // const regex2 = /(\d{3}\D(\d{3})-(\d{2})-(\d{2}))/g;
    // const result3 = regex2.test('123-123-12-12.');
    // console.log(result3);
}

{
    // const regex2 = /(\d{4}\D(\d{4})-(\d{2}))/g;
    // const result3 = regex2.test('1234-1234-12.');
    // console.log(result3);
}