import Announcement from "@/emails/Announcement";
import { render } from "@react-email/render";
import { contents as items } from "@/english-expression/daily-expression";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const item = items.find((x) => x.id === id);
  if (!item) return <div>Item not found</div>;

  // 이메일 템플릿을 HTML로 변환
  const html = render(<Announcement item={item} />);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}
    />
  );
}
