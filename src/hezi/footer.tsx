export default function Footer() {
    return (
      <footer className="mt-auto bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center text-sm text-gray-600">
            <p className="max-w-2xl">
              本站所有资源均来自互联网，仅供学习交流使用，版权归原作者所有，如有侵权请联系删除
            </p>
            <p>联系站长：{process.env.NEXT_PUBLIC_EMAIL}</p>
          </div>
        </div>
      </footer>
    )
  }