// app/policy/page.tsx

export default function PolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-md shadow-lg ring-1 ring-gray-200">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700">
        개인정보 처리방침
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        <strong>시행일자:</strong> 2025년 8월 18일
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Daily English(이하 "데일리 잉글리쉬")는 사용자의 개인정보를 중요하게
        생각하며, 관련 법령을 준수합니다. 본 방침은 서비스가 이메일 주소를
        포함한 개인정보를 어떻게 수집, 이용, 보관, 삭제하는지 설명합니다.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          1. 수집하는 개인정보 항목
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>필수 항목</strong>: 이메일 주소
          </li>
          <li>
            <strong>수집 방법</strong>: 웹사이트 내 구독 신청 폼을 통한 직접
            입력
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          2. 개인정보 수집 및 이용 목적
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>평일 동일 시간에 Daily English 학습 메일 발송</li>
          <li>발송 관련 문의 대응 및 구독 관리</li>
          <li>서비스 품질 향상을 위한 통계 분석(익명 처리 후 사용)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          3. 개인정보 보관 및 이용 기간
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>구독 기간 동안만 보관</li>
          <li>
            사용자가 구독 해지를 요청하거나 서비스 제공 목적이 달성되면 즉시
            삭제
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          4. 개인정보 파기 절차 및 방법
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            구독 해지요청 이메일(tmdmrs522@gmail.com) 발송 후 담당자 확인 시
            서비스 DB에서 즉시 삭제
          </li>
          <li>전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          5. 개인정보 제3자 제공
        </h2>
        <p className="text-gray-700">
          법령에 따라 요구되는 경우를 제외하고 제3자에게 제공하지 않습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          6. 개인정보 처리 위탁
        </h2>
        <p className="text-gray-700">
          현재 개인정보 처리 위탁은 없습니다. 추후 위탁이 필요한 경우, 사전에
          고지하고 동의를 받습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          7. 이용자의 권리
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>구독 해지 및 개인정보 삭제 요청이 가능합니다.</li>
          <li>수신 거부 링크는 매 이메일 하단에 포함되어 있습니다.</li>
          <li>
            개인정보 열람·정정·삭제 요청:{" "}
            <strong>contact@dailyenglish.com</strong>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          8. 보안 조치
        </h2>
        <p className="text-gray-700">
          현재 서비스는 Supabase의 보안 기능을 활용하여 이메일 정보를 안전하게
          저장하고 있습니다. 별도의 추가 암호화나 보안 시스템은 적용하지
          않았으나, Supabase가 제공하는 기본 보안과 접근 제어를 준수하고
          있습니다. 앞으로 보안 수준을 높이기 위한 조치를 검토할 예정입니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          9. 개인정보 보호책임자
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>이름: 윤승근</li>
          <li>이메일: tmdmrs522@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          10. 정책 변경
        </h2>
        <p className="text-gray-700">
          본 방침 내용 변경 시 웹사이트 공지를 통해 알려드립니다/
        </p>
      </section>
    </main>
  );
}
