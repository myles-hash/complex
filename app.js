console.log('Hi');

const blogPost = {
    title: 'My first blog',
    author: {
        name: 'Myles',
        age: 24,
        favouriteColor: 'black'
    },
    tags: ['coding','javascript','objects','arrays'],
    content: 'This is my first blog about coding'
};

console.log(blogPost);

console.log(blogPost.tags[2]);

console.log(blogPost.author.age);

console.log(blogPost.author.length);

console.log(
    `There are ${blogPost.tags.length} tags for ${blogPost.title} by ${blogPost.author.name}`
);
console.log('They are:')
for (let i = 0; i < blogPost.tags.length; i++){
    console.log(i, blogPost.tags[i]);
};

console.log(`Tags for post "${blogPost.title}" by "${blogPost.author.name}" (excluding index):`); 
for (let tag of blogPost.tags) {
  console.log(tag);
}
