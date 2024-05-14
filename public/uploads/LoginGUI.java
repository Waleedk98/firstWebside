import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LoginGUI extends JFrame {

	private JTextField loginField;
	private JPasswordField passwordField;
	private JButton loginButton;
	private int clickCount;

	public LoginGUI() {
		setTitle("Login");
		setSize(260, 300);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);

		JMenuBar menuBar = new JMenuBar();
		JMenu fileMenu = new JMenu("File");
		JMenuItem exitMenuItem = new JMenuItem("Exit");
		fileMenu.add(exitMenuItem);

		JMenu helpMenu = new JMenu("Help");
		JMenuItem infoMenuItem = new JMenuItem("Info");
		helpMenu.add(infoMenuItem);

		JMenu extraMenu = new JMenu("Extra");
		JMenuItem extra1MenuItem = new JMenuItem("Extra1");
		JMenuItem extra2MenuItem = new JMenuItem("Extra2");
		JMenuItem extra3MenuItem = new JMenuItem("Extra3");
		JMenuItem extra4MenuItem = new JMenuItem("Extra4");

		
		extraMenu.add(extra1MenuItem);
		extraMenu.addSeparator();
		extraMenu.add(extra2MenuItem);
		extraMenu.addSeparator();
		extraMenu.add(extra3MenuItem);
		extraMenu.addSeparator();
		extraMenu.add(extra4MenuItem);

		menuBar.add(fileMenu);
		menuBar.add(helpMenu);
		menuBar.add(extraMenu);
		setJMenuBar(menuBar);

		JPanel panel = new JPanel();
		panel.setLayout(null);

		JLabel loginLabel = new JLabel("Login:");
		loginLabel.setHorizontalAlignment(SwingConstants.CENTER);
		loginLabel.setBounds(0, 0, 240, 20);
		panel.add(loginLabel);

		loginField = new JTextField(20);
		loginField.setHorizontalAlignment(SwingConstants.CENTER);
		loginField.setBounds(10, 30, 220, 20);
		panel.add(loginField);

		JLabel passwordLabel = new JLabel("Password:");
		passwordLabel.setHorizontalAlignment(SwingConstants.CENTER);
		passwordLabel.setBounds(0, 65, 240, 20);
		panel.add(passwordLabel);

		passwordField = new JPasswordField(20);
		passwordField.setHorizontalAlignment(SwingConstants.CENTER);
		passwordField.setBounds(10, 95, 220, 20);
		panel.add(passwordField);

		loginButton = new JButton("Login");
		loginButton.setBounds(70, 130, 100, 25);
		loginButton.setAlignmentX(Component.CENTER_ALIGNMENT);
		panel.add(loginButton);

		add(panel);

		exitMenuItem.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});

		infoMenuItem.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.out.println("Info");
			}
		});

		extra1MenuItem.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("Extra1");
			}
		});

		extra2MenuItem.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("Extra2");
			}
		});
		extra3MenuItem.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("Extra3");
			}
		});
		extra4MenuItem.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("Extra4");
			}
		});
		loginButton.addActionListener(new ActionListener() {
			@SuppressWarnings("deprecation")
			public void actionPerformed(ActionEvent e) {

				if (!loginField.getText().isEmpty() && !passwordField.getText().isEmpty())
					System.exit(0);

				if (clickCount >= 3) {
					System.out.println("WARNUNG");
				} else {
					clickCount++;
				}
			}
		});
	}

	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				LoginGUI loginGUI = new LoginGUI();
				loginGUI.setVisible(true);
			}
		});
	}
}
