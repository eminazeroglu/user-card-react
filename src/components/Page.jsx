function Page({children, title}) {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default Page;
