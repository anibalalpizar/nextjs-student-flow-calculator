# 📊 Student Flow Calculator

A professional web application for analyzing student retention and flow patterns in university programs. Built with Next.js, TypeScript, and modern UI components.

![Student Flow Calculator](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## 🌟 Features

### 📈 Comprehensive Analysis
- **Student Retention Tracking**: Monitor student numbers across academic periods
- **Dropout Rate Calculation**: Automatic calculation of retention and dropout percentages
- **Student Flow Visualization**: Handle both increases and decreases in enrollment
- **Real-time Calculations**: Instant updates as you modify data

### 📊 Interactive Visualizations
- **Bar Charts**: Student numbers per period with reference lines
- **Line Charts**: Trend analysis over time
- **Area Charts**: Comprehensive flow visualization
- **Pie Charts**: Final distribution of active vs. lost students
- **Fluctuation Charts**: Visual representation of increases/decreases

### 🎯 User-Friendly Interface
- **Tabbed Navigation**: Organized sections for configuration, analysis, charts, and summary
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Intuitive Forms**: Easy period management with add, edit, and delete functionality

### 📋 Detailed Reporting
- **Statistical Summary**: Key metrics and performance indicators
- **Period-by-Period Analysis**: Detailed breakdown of each academic period
- **Trend Identification**: Automatic detection of patterns and anomalies
- **Professional Tables**: Clean, sortable data presentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anibalalpizar/student-flow-calculator.git
   cd student-flow-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### 1. Configuration
- Navigate to the **Configuration** tab
- Add academic periods (semesters, quarters, courses)
- Input student numbers for each period
- Edit or remove periods as needed

### 2. Data Analysis
- View the **Data Table** for detailed period-by-period analysis
- Check retention rates, dropout percentages, and student differences
- Identify periods with increases or decreases

### 3. Visualizations
- Explore interactive **Charts** to understand trends
- View student flow patterns over time
- Analyze distribution and fluctuation patterns

### 4. Summary & Insights
- Review **Summary** statistics for key metrics
- Get automated insights and recommendations
- Understand overall program performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library

### Charts & Visualization
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
student-flow-calculator/
├── app/                          # Next.js App Router
│   ├── calculator/              # Calculator page
│   ├── help/                    # Help and support page
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                  # Reusable components
│   ├── calculator/             # Calculator-specific components
│   ├── charts/                 # Chart components
│   ├── forms/                  # Form components
│   └── ui/                     # shadcn/ui components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── types/                      # TypeScript type definitions
└── public/                     # Static assets
```

## 🎨 Key Components

### Custom Hooks
- `useStudentFlow` - Manages student data and calculations
- `useFeedback` - Handles user feedback and support

### Core Components
- `PeriodForm` - Add new academic periods
- `PeriodList` - Manage existing periods
- `DataTable` - Display detailed analysis
- `StudentCharts` - Interactive visualizations
- `StatisticsSummary` - Key metrics overview

## 📊 Calculation Logic

The application automatically calculates:

- **Retention Rate**: `(Current Students / Previous Students) × 100`
- **Dropout Rate**: `(Students Lost / Previous Students) × 100`
- **Increase Rate**: `(Students Gained / Previous Students) × 100`
- **Overall Retention**: `(Final Students / Initial Students) × 100`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aníbal Alpízar**
- GitHub: [@anibalalpizar](https://github.com/anibalalpizar)
- LinkedIn: [Aníbal Alpízar](https://linkedin.com/in/anibalalpizar)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)
---

<div align="center">
  <p>Made with ❤️ for educational institutions</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
