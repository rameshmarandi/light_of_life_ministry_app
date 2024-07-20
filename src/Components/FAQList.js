import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {getFontSize, getResHeight, getResWidth} from '../utility/responsive';
import theme from '../utility/theme';
import {ButtonIconComp} from './commonComp';
import {VectorIcon} from './VectorIcon';

const faqData = [
  {
    lableName: 'What are the church service times?',
    lableValue:
      'Our regular service times are as follows:\n- Sunday Morning Worship: 9:00 AM and 11:00 AM\n- Wednesday Bible Study: 7:00 PM\n- Friday Prayer Meeting: 6:30 PM',
  },
  {
    lableName: 'How can I get involved in the church?',
    lableValue:
      'There are many ways to get involved, including joining a small group, volunteering in various ministries, attending our events, and participating in community outreach programs. Please contact our office or visit our website for more information on how to get started.',
  },
  {
    lableName: 'Do I need to be a member to attend services?',
    lableValue:
      'No, everyone is welcome to attend our services. You do not need to be a member to participate in our worship services, events, or programs.',
  },
  {
    lableName: 'How can I request prayer?',
    lableValue:
      'You can request prayer by contacting our church office, filling out a prayer request form on our website, or speaking to one of our pastors or leaders during a service. We believe in the power of prayer and are here to support you.',
  },
  {
    lableName: 'How do I become a member of the church?',
    lableValue:
      'To become a member, you can attend our membership classes, which are held quarterly. These classes provide an overview of our beliefs, mission, and the various ways you can get involved. After completing the class, you will have the opportunity to meet with a pastor and officially join the church.',
  },
  {
    lableName: 'What are the benefits of church membership?',
    lableValue:
      'Membership provides a deeper connection to the church community, opportunities for spiritual growth, and the ability to serve in various ministries. Members also have a voice in church decisions and access to pastoral care and support.',
  },
  {
    lableName: 'How can I give to the church?',
    lableValue:
      'There are several ways to give:\n- Online through our website\n- In-person during services\n- By mailing a check to our church office\nYour generous contributions support our mission and various ministries.',
  },
  {
    lableName: 'Is my donation tax-deductible?',
    lableValue:
      'Yes, all donations to the church are tax-deductible. You will receive an annual giving statement for your records.',
  },
  {
    lableName: 'What programs are available for children and youth?',
    lableValue:
      'We offer a variety of programs for children and youth, including Sunday School, youth groups, vacation Bible school, and special events throughout the year. Our goal is to provide a safe and nurturing environment for young people to grow in their faith.',
  },
  {
    lableName: 'How can I find out about upcoming events?',
    lableValue:
      'You can find information about upcoming events on our website, in our weekly bulletin, or by following us on social media. We also send out email newsletters with event updates.',
  },
];

const FAQItem = React.memo(({item, index, expandedIndex, setExpandedIndex}) => {
  const isExpanded = expandedIndex === index;
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const toggleCollapse = useCallback(() => {
    setExpandedIndex(isExpanded ? null : index);
  }, [isExpanded, index, setExpandedIndex]);

  return (
    <Animatable.View
      style={styles.itemContainer}
      duration={300}
      transition="backgroundColor">
      <TouchableOpacity
        onPress={toggleCollapse}
        style={[
          styles.itemHeader,
          {
            paddingVertical: isExpanded ? getResHeight(1) : 0,
          },
        ]}>
        <View style={[styles.itemTitleContainer, {}]}>
          <Text
            style={[
              styles.itemTitle,
              {
                color: currentTextColor,
                fontSize: getFontSize(1.6),
              },
            ]}>
            {item.lableName}
          </Text>
        </View>

        <TouchableOpacity onPress={toggleCollapse}>
          <VectorIcon
            type={'AntDesign'}
            name={isExpanded ? 'caretup' : 'caretdown'}
            size={getFontSize(2)}
            color={currentTextColor}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Collapsible collapsed={!isExpanded}>
        <Animatable.Text
          animation={isExpanded ? 'fadeIn' : undefined}
          style={[
            styles.itemContent,
            {
              width: '100%',
              borderTopWidth: 1,
              borderColor: 'white',
              color: currentTextColor,
              paddingHorizontal: getResHeight(1.3),
              paddingVertical: getResHeight(1),
              fontFamily: theme.font.regular,
            },
          ]}>
          {item.lableValue}
        </Animatable.Text>
      </Collapsible>
    </Animatable.View>
  );
});

const FAQList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderItem = useCallback(
    ({item, index}) => (
      <FAQItem
        item={item}
        index={index}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
      />
    ),
    [expandedIndex],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: getResHeight(10),
  },
  itemContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: getResHeight(1.3),
    paddingVertical: getResHeight(1),

    borderRadius: getResHeight(1),
  },
  itemHeader: {
    paddingHorizontal: getResHeight(1.3),

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitleContainer: {
    // paddingHorizontal: getResHeight(1.3),
    width: getResWidth(70),
  },
  itemTitle: {
    fontFamily: theme.font.medium,
  },
  itemContent: {
    lineHeight: 27,
  },
  iconContainer: {
    width: getResHeight(4),
    height: getResHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getResHeight(100),
  },
});

export default FAQList;
