export default function Footer() {
  return (
    <footer className="nav-panel">
      <div 
        className=" p-3 w-100 h6 m-0 d-flex align-items-center justify-content-center nav-panel">
        <span className="pe-2">Виконано в</span>
        <a 
          href="https://prometheus.org.ua/" 
          className="fs-5 link-success link-underline-opacity-0"
          target="_blank"
        >
            Prometheus
        </a>
      </div> 
    </footer>   
  )
}