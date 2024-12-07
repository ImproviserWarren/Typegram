return (
    <div className="flex">
        {posts.map((post) => {
        return (
            <Card>
                <CardContent>
                    <div>{post.caption}</div>
                </CardContent>
            </Card>
        )
    })}
    </div>
)